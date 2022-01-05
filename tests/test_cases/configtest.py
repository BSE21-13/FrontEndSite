"""This is a set up method that contains all the generic requirements for all pages

    -- The ChromeDriver provides capabilities for navigating to web pages, user input,
        JavaScript execution, and more.
    -- The headless option is a boolean that enables and disables running the tests in headless mode
    -- The Implicit Wait is used to tell the web driver to wait for a certain amount of time in
    seconds before it throws a "No Such Element Exception".
    -- The maximize window is used to maximize the browser window size

    This method will run before every test method.

"""

import pytest
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager
from my_email_test import send_email


@pytest.fixture()
def setup():
    """This method runs before every test method."""

    # Run tests in Headless Chrome
    options = webdriver.ChromeOptions()
    try :
        options.headless = False
        chrome_prefs = {}
        options.experimental_options["prefs"] = chrome_prefs
        driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
  
    except:
        options.headless = True
        options.add_argument("--headless")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        options.add_argument("--dist=loadfile")
        chrome_prefs = {}
        options.experimental_options["prefs"] = chrome_prefs
        driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)


    driver.implicitly_wait(20)
    driver.maximize_window()
    
    return driver
