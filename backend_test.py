import requests
import sys
import json
from datetime import datetime, timedelta

class RestaurantAPITester:
    def __init__(self, base_url="https://authentic-prague.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []
        self.api_url = f"{base_url}/api"

    def run_test(self, name, method, endpoint, expected_status, data=None, timeout=10):
        """Run a single API test"""
        url = f"{self.api_url}{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=timeout)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=timeout)

            print(f"Status Code: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ PASSED - {name}")
                return True, response.json() if response.text else {}
            else:
                print(f"❌ FAILED - {name}")
                print(f"Expected {expected_status}, got {response.status_code}")
                if response.text:
                    print(f"Response: {response.text[:500]}")
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "endpoint": endpoint
                })
                return False, {}

        except requests.exceptions.Timeout:
            print(f"❌ FAILED - {name} (Timeout after {timeout}s)")
            self.failed_tests.append({
                "test": name,
                "error": "Request timeout",
                "endpoint": endpoint
            })
            return False, {}
        except Exception as e:
            print(f"❌ FAILED - {name} (Error: {str(e)})")
            self.failed_tests.append({
                "test": name,
                "error": str(e),
                "endpoint": endpoint
            })
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "/",
            200
        )
        if success and response.get('message'):
            print(f"Message: {response['message']}")
        return success

    def test_get_menu(self):
        """Test getting menu data"""
        success, response = self.run_test(
            "Get Menu",
            "GET",
            "/menu",
            200
        )
        if success:
            # Validate menu structure
            required_categories = ['antipasti', 'primi', 'secondi', 'dolci', 'vini']
            for category in required_categories:
                if category not in response:
                    print(f"❌ Missing category: {category}")
                    return False
                if not isinstance(response[category], list):
                    print(f"❌ Category {category} is not a list")
                    return False
            print("✅ Menu structure is valid")
        return success

    def test_get_info(self):
        """Test getting restaurant info"""
        success, response = self.run_test(
            "Get Restaurant Info",
            "GET",
            "/info",
            200
        )
        if success:
            required_fields = ['name', 'address', 'phone', 'rating', 'reviews', 'hours']
            for field in required_fields:
                if field not in response:
                    print(f"❌ Missing field: {field}")
                    return False
            print(f"✅ Restaurant: {response.get('name')}")
            print(f"✅ Rating: {response.get('rating')}/5 ({response.get('reviews')} reviews)")
        return success

    def test_create_reservation(self):
        """Test creating a reservation"""
        # Test with valid data
        future_date = (datetime.now() + timedelta(days=7)).strftime('%Y-%m-%d')
        test_reservation = {
            "name": "Test Customer",
            "phone": "+420123456789",
            "email": "test@example.com",
            "date": future_date,
            "time": "19:00",
            "guests": 4,
            "notes": "Test reservation"
        }
        
        success, response = self.run_test(
            "Create Reservation (Valid)",
            "POST",
            "/reservations",
            200,
            data=test_reservation
        )
        
        if success:
            print(f"✅ Reservation ID: {response.get('id')}")
            return response.get('id')
        return None

    def test_create_reservation_invalid(self):
        """Test creating a reservation with invalid data"""
        invalid_reservation = {
            "name": "",  # Missing required field
            "phone": "",  # Missing required field
            "date": "invalid-date",
            "time": "25:00",  # Invalid time
            "guests": 0  # Invalid guest count
        }
        
        success, response = self.run_test(
            "Create Reservation (Invalid)",
            "POST",
            "/reservations",
            422,  # Validation error
            data=invalid_reservation
        )
        return not success  # Should fail with validation error

    def test_get_reservations(self):
        """Test getting reservations"""
        success, response = self.run_test(
            "Get Reservations",
            "GET",
            "/reservations",
            200
        )
        if success:
            print(f"✅ Found {len(response)} reservations")
        return success

    def test_contact_form(self):
        """Test contact form submission"""
        contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a test message to verify the contact form functionality."
        }
        
        success, response = self.run_test(
            "Submit Contact Form",
            "POST",
            "/contact",
            200,
            data=contact_data
        )
        
        if success:
            print(f"✅ Contact ID: {response.get('id')}")
        return success

def main():
    print("🍝 Testing Ristorantino da Matteo API")
    print("=" * 50)
    
    tester = RestaurantAPITester()
    
    # Run all tests
    tests = [
        ("API Root", tester.test_api_root),
        ("Menu Endpoint", tester.test_get_menu),
        ("Restaurant Info", tester.test_get_info),
        ("Create Reservation (Valid)", tester.test_create_reservation),
        ("Create Reservation (Invalid)", tester.test_create_reservation_invalid),
        ("Get Reservations", tester.test_get_reservations),
        ("Contact Form", tester.test_contact_form),
    ]
    
    for test_name, test_func in tests:
        try:
            test_func()
        except Exception as e:
            print(f"❌ FAILED - {test_name} (Exception: {str(e)})")
            tester.failed_tests.append({
                "test": test_name,
                "error": str(e),
                "endpoint": "N/A"
            })

    # Print final results
    print(f"\n📊 FINAL RESULTS")
    print("=" * 50)
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"Success rate: {success_rate:.1f}%")
    
    if tester.failed_tests:
        print(f"\n❌ FAILED TESTS:")
        for test in tester.failed_tests:
            print(f"  - {test.get('test', 'Unknown')}: {test.get('error', 'Status mismatch')}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())