from selenium import webdriver
import selenium.common.exceptions as selEx
from selenium.webdriver.common.keys import Keys
import time


def main():
    # Setup driver framework
    driver = webdriver.Firefox()

    # Backtrace messages, pass to tests to provide context
    message_home_page = "Testing home page."
    message_search_result_page = "Testing search results page."
    message_single_recipe_page = "Testing single recipe page."
    message_test_page = "Testing test page."

    # Context variables
    # Local addresses
    addr_home = "http://127.0.0.1:3000"
    addr_search_result_page = "http://127.0.0.1:3000/SearchResult"
    addr_single_recipe_test = "http://127.0.0.1:3000/SingleRecipeTest"
    addr_test = "http://127.0.0.1:3000/test"

    # Start Tests
    print("Test Suite Starting")
    print("Testing home page...")
    test_site(driver, addr_home, message_home_page)
    test_title(driver, message_home_page)
    element_search_bar = test_search_bar_exists(driver, message_home_page)
    element_login_button = test_login_exists(driver, message_home_page)
    result_card, result_text = test_search_bar_search(driver, element_search_bar, message_home_page)



    # print("Testing search result...")
    # test_site(driver, addr_search_result_page, message_search_result_page)
    # element_login_button = test_login_exists(driver, message_home_page)
    #
    # print("Testing single recipe page...")
    # test_site(driver, addr_single_recipe_test, message_single_recipe_page)
    # element_login_button = test_login_exists(driver, message_home_page)
    #
    # print("Testing test page...")
    # test_site(driver, addr_test, message_test_page)
    # element_login_button = test_login_exists(driver, message_home_page)

    print("Tests Completed")


# Test if site is functioning
def test_site(driver, site_url, message):
    try:
        driver.get(site_url)
    except selEx.WebDriverException as e:
        print("Test Failed: ", message, " Could not reach site.\n", e, "\n")


# Test site title, mainly just a test of the test suite
def test_title(driver, message):
    try:
        assert "Sous Chef" in driver.title
    except AssertionError:
        print("Test Failed: ", message, " Title is incorrect.")


# Test if the search bar is present on the current page
#   Returns search bar element if it passes
def test_search_bar_exists(driver, message):
    try:
        search_bar = driver.find_element_by_class_name("search-bar")
        return search_bar
    except selEx.NoSuchElementException as e:
        print("Test Failed: ", message, " Search Bar is not on page.\n", e, "\n")


# Test the search bar:
#   send a string and press enter
def test_search_bar_search(driver, search_bar, message):
    search_phrase = "pumpkin, pie"
    try:
        # In the search bar element, enter the chosen search_phrase and then press enter
        search_bar.send_keys(search_phrase, Keys.RETURN)

        # Give site time to load results
        time.sleep(5)

        # Check elements in results page
        result_card = driver.find_element_by_class_name("recipe-card")
        result_text = driver.find_element_by_class_name("reicpe-text")

        # Return elements
        return result_card, result_text
    except selEx.NoSuchElementException as e:
        print("Test Failed: ", message, " Error using search bar.\n", e, "\n")


# Test if the login button is present on the current page
#   Return login element if it passes
def test_login_exists(driver, message):
    try:
        login_button = driver.find_element_by_class_name("login-btn")
        return login_button
    except selEx.NoSuchElementException as e:
        print("Test Failed: ", message, " Login button is not on page.\n", e, "\n")


# TODO:

if __name__ == "__main__":
    main()

