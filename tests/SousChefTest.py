from selenium import webdriver
import selenium.common.exceptions as selEx
from selenium.webdriver.common.keys import Keys
import time

# Backtrace messages, pass to tests to provide context
message_home_page = "Testing home page."
message_search_result_page = "Testing search results page."
message_single_recipe_page = "Testing single recipe page."
message_test_page = "Testing test page."
message_profile_page = "Testing profile page."


def main():
    # Setup driver framework
    driver = webdriver.Firefox()

    # Context variables
    # Local addresses
    # addr_home = "http://127.0.0.1:3000"
    # addr_search_result_page = "http://127.0.0.1:3000/SearchResult"
    # addr_single_recipe_test = "http://127.0.0.1:3000/SingleRecipeTest"
    # addr_test = "http://127.0.0.1:3000/test"

    # Live addresses
    addr_home = "https://sous-chef-recipe.herokuapp.com/"
    addr_search_result_page = "https://sous-chef-recipe.herokuapp.com/SearchResult"
    addr_single_recipe_test = "https://sous-chef-recipe.herokuapp.com/SingleRecipeTest"
    addr_test = "https://sous-chef-recipe.herokuapp.com/test"
    addr_profile = "https://sous-chef-recipe.herokuapp.com/profile"

    # Start Tests
    print("Test Suite Starting")
    print("Testing home page...")
    test_site(driver, addr_home, message_home_page)
    test_title(driver, message_home_page)
    element_search_bar = test_search_bar_exists(driver, message_home_page)
    element_login_button = test_login_exists(driver, message_home_page)
    test_search_bar_search(driver, element_search_bar, message_home_page)

    print("Testing search result...")
    test_site(driver, addr_search_result_page, message_search_result_page)
    element_login_button = test_login_exists(driver, message_home_page)
    
    print("Testing single recipe page...")
    test_site(driver, addr_single_recipe_test, message_single_recipe_page)
    element_login_button = test_login_exists(driver, message_home_page)
    
    print("Testing test page...")
    test_site(driver, addr_test, message_test_page)
    element_login_button = test_login_exists(driver, message_home_page)

    print("Testing profile page...")
    test_site(driver, addr_profile, message_profile_page)
    test_profile_page(driver, message_profile_page)

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


# Test footer, get footer text.
def test_footer(driver, message):
    try:
        footer_text = driver.find_element_by_id("test_footer_text")
    except selEx.NoSuchElementException as e:
        print("Test Failed: ", message, " Footer is not on page.\n", e, "\n")


# Test if the search bar is present on the current page
#   Returns search bar element if it passes
def test_search_bar_exists(driver, message):
    try:
        search_bar = driver.find_element_by_id("test_search_bar")
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
        test_login_exists(driver, message_search_result_page)
        test_search_result_searchbar_exists(driver, message_search_result_page)

        result_card = driver.find_element_by_id("test_search_result_recipe_card")

        result_text = driver.find_element_by_id("test_search_result_recipe_title")
        # print(result_text)

        # Test page navigation (expects 10 results returned)
        prev_page = driver.find_element_by_id("test_search_result_navbutton_prev")
        next_page = driver.find_element_by_id("test_search_result_navbutton_next")
        next_page.click()
        next_page.click()
        prev_page.click()
        prev_page.click()

        # Click on the first recipe result
        driver.find_element_by_id("test_search_result_recipe_card").click()

        # Give site time to load results
        time.sleep(5)

        # Test the contents of the clicked recipe
        # This is testing the SingleRecipe page
        result_title = driver.find_element_by_id('test_single_recipe_title')
        result_per_serving = driver.find_elements_by_id("test_single_recipe_nutrients")
        result_recipe_step = driver.find_elements_by_id("test_single_recipe_instructions")
        result_ingredients = driver.find_elements_by_id("test_single_recipe_ingredients")
        result_nutrition_calories = driver.find_element_by_id("test_single_recipe_calories")
        result_nutrition_yield = driver.find_element_by_id("test_single_recipe_serving")
        result_nutrition_timing = driver.find_element_by_id("test_single_recipe_cook_time")
        result_recipe_image = driver.find_element_by_id("test_single_recipe_image")

        # Test login page on SingleRecipe page
        test_login_exists(driver, message_single_recipe_page)

    except selEx.NoSuchElementException as e:
        print("Test Failed: ", message, " Error in search process.\n", e, "\n")


# Test if the login button is present on the current page
#   Return login element if it passes
def test_login_exists(driver, message):
    try:
        login_button = driver.find_element_by_id("test_nav_login_button")
        return login_button
    except selEx.NoSuchElementException as e:
        print("Test Failed: ", message, " Login button is not on page.\n", e, "\n")


#
def test_search_result_searchbar_exists(driver, message):
    try:
        searchbar = driver.find_element_by_id("test_search_result_searchbar")
    except selEx.NoSuchElementException as e:
        print("Test Failed: ", message, " Local searchbar is not on page.\n", e, "\n")


def test_profile_page(driver, message):
    try:
        personal_button = driver.find_element_by_id("test_profile_page_personal_button")
        favorite_button = driver.find_element_by_id("test_profile_page_favorite_button")
        allergen_button = driver.find_element_by_id("test_profile_page_allergen_button")

        user_image = driver.find_element_by_id("test_profile_page_user_image")

        email_input = driver.find_element_by_id("test_profile_page_email_input")
        first_name_input = driver.find_element_by_id("test_profile_page_first_name_input")
        last_name_input = driver.find_element_by_id("test_profile_page_last_name_input")
        password_input = driver.find_element_by_id("test_profile_page_password_input")

        setup_button = driver.find_element_by_id("test_profile_page_setup_button")
    except selEx.NoSuchElementException as e:
        print("Test Failed: ", message, " Profile Page encountered error.\n", e, "\n")

# TODO:
    # static expansion

if __name__ == "__main__":
    main()

