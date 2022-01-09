from selenium.webdriver.common.by import By
from page_objects.base_page import BasePage
from .cadise_page_objects import CadisePageElements

# Instantiating Cadise Page Elements
cadise_elements = CadisePageElements
class CadiseUiChecks(BasePage):
    def check_search_bar(self):
        """ Method tests if search bar is displayed and enabled """
        element = self.driver.find_element(
            By.XPATH,
            cadise_elements.search_bar_xpath
        )
        self.driver.execute_script(
            "arguments[0].scrollIntoView(true);",
            element
        )
        element.is_displayed()
        element.is_enabled()

    def check_need_lawyer_btn_label(self):
        """ Method tests for need lawyer button label """
        element = cadise_elements.need_lawyer_btn_xpath
        self.driver.find_element(By.XPATH, element).is_displayed()
        btn_label_txt = self.driver.find_element(By.XPATH, element).text
        assert btn_label_txt == "Need a lawyer?"

    def check_need_lawyer_btn(self):
        """ Method tests if need lawyer btn is displayed and enabled """
        element = self.driver.find_element(
            By.XPATH,
            cadise_elements.need_lawyer_btn_xpath
        )
        self.driver.execute_script(
            "arguments[0].scrollIntoView(true);",
            element
        )
        element.is_displayed()
        element.is_enabled()

    def click_need_lawyer_btn(self):
        """ Method tests if need lawyer btn can be clicked """
        element = cadise_elements.need_lawyer_btn_xpath
        lawyer_btn = self.driver.find_element(By.XPATH, element)
        self.driver.execute_script("arguments[0].click();",
                                    lawyer_btn)

    def check_legal_supporter_label(self):
        """ Method tests for legal supporter pager label """
        element = cadise_elements.legal_supporter_label
        self.driver.find_element(By.XPATH, element).is_displayed()
        btn_label_txt = self.driver.find_element(By.XPATH, element).text
        assert btn_label_txt == "Our registered legal support partners."

    def check_send_email_btn_label(self):
        """ Method tests for send email button label """
        element = cadise_elements.send_email_btn_xpath
        self.driver.find_element(By.XPATH, element).is_displayed()
        btn_label_txt = self.driver.find_element(By.XPATH, element).text
        assert btn_label_txt == "SEND EMAIL"

    def check_send_email_btn(self):
        """ Method tests if send email btn is displayed and enabled """
        element = self.driver.find_element(
            By.XPATH,
            cadise_elements.send_email_btn_xpath
        )
        self.driver.execute_script(
            "arguments[0].scrollIntoView(true);",
            element
        )
        element.is_displayed()
        element.is_enabled()

    def check_browse_constitution_btn_label(self):
        """ Method tests for browse constitution button label """
        element = cadise_elements.browse_btn_xpath
        self.driver.find_element(By.XPATH, element).is_displayed()
        btn_label_txt = self.driver.find_element(By.XPATH, element).text
        assert btn_label_txt == "BROWSE THE CONSTITUTION"

    def check_browse_constitution_btn(self):
        """ Method tests if send email btn is displayed and enabled """
        element = self.driver.find_element(
            By.XPATH,
            cadise_elements.browse_btn_xpath
        )
        self.driver.execute_script(
            "arguments[0].scrollIntoView(true);",
            element
        )
        element.is_displayed()
        element.is_enabled()

    def check_help_btn_label(self):
        """ Method tests for help button label """
        element = cadise_elements.help_btn_xpath
        self.driver.find_element(By.XPATH, element).is_displayed()
        btn_label_txt = self.driver.find_element(By.XPATH, element).text
        assert btn_label_txt == "HELP"

    def check_help_button_btn(self):
        """ Method tests if help btn is displayed and enabled """
        element = self.driver.find_element(
            By.XPATH,
            cadise_elements.help_btn_xpath
        )
        self.driver.execute_script(
            "arguments[0].scrollIntoView(true);",
            element
        )
        element.is_displayed()
        element.is_enabled()
        