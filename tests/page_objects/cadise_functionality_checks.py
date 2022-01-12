from selenium.webdriver.common.by import By
from page_objects.base_page import BasePage
from .cadise_page_objects import CadisePageElements
from configurations.test_data import CadiseTestData
from selenium.webdriver.common.keys import Keys

# Instantiating Cadise Page Elements
cadise_elements = CadisePageElements

#instantiating Cadise test data
test_data = CadiseTestData()
class CadiseFunctionalityChecks(BasePage):
    def input_search_bar(self):
        """ Method tests if input search can be clicked """
        element = cadise_elements.search_bar_xpath
        search = test_data.search_phase
        self.driver.find_element(By.XPATH,
                                    element).send_keys(Keys.CONTROL + "a")
        self.driver.find_element(By.XPATH, element).send_keys(Keys.DELETE)
        self.driver.find_element(By.XPATH, element).send_keys(search)

    def click_send_email_btn(self):
        """ Method tests if need lawyer btn can be clicked """
        element = cadise_elements.send_email_btn_xpath
        email_btn = self.driver.find_element(By.XPATH, element)
        self.driver.execute_script("arguments[0].click();",
                                    email_btn)

    def click_browse_btn(self):
        """ Method tests if browse btn can be clicked """
        element = cadise_elements.browse_btn_xpath
        browse_btn = self.driver.find_element(By.XPATH, element)
        self.driver.execute_script("arguments[0].click();",
                                    browse_btn)

    def click_help_btn(self):
        """ Method tests if help btn can be clicked """
        element = cadise_elements.help_btn_xpath
        help_btn = self.driver.find_element(By.XPATH, element)
        self.driver.execute_script("arguments[0].click();",
                                    help_btn)
