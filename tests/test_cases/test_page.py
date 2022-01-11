# pylint: disable=import-error
import time
from page_objects.cadise_uichecks import CadiseUiChecks
from page_objects.cadise_functionality_checks import CadiseFunctionalityChecks
from test_cases.configtest import setup
from utilities.read_properties import ReadConfig

base_url = ReadConfig.get_application_url()
class TestcadisePages:
    """This class specifies UI Checks and functionality checks on the Cadise application"""

    def test_cadise_ui_checks(self, setup):
        """This method specifies UI Checks on the cadise """
        self.driver = setup
        self.driver.get(base_url)
        # Testcase 001
        #Instantiation
        uichecks = CadiseUiChecks(self.driver)
        
        #performing ui checks
        try:   
            uichecks.check_search_bar()
            uichecks.check_need_lawyer_btn_label()
            uichecks.check_need_lawyer_btn()
            uichecks.click_need_lawyer_btn()
            uichecks.check_legal_supporter_label()
            uichecks.check_send_email_btn_label()
            uichecks.check_send_email_btn()
            uichecks.check_browse_constitution_btn_label()
            uichecks.check_browse_constitution_btn()
            uichecks.check_help_btn_label()
            uichecks.check_help_button_btn()
        except:
            self.driver.close()    
 
    def test_cadise_functionality_checks(self, setup):
        """This method specifies functionality Checks on the cadise """
        self.driver = setup
        self.driver.get(base_url)
        # Testcase 002

        #Instantiation
        uichecks = CadiseUiChecks(self.driver)
        functionalitychecks = CadiseFunctionalityChecks(self.driver)
        
        #performing ui checks
        try:
            functionalitychecks.input_search_bar()
            time.sleep(2)
            uichecks.click_need_lawyer_btn()
            functionalitychecks.click_send_email_btn()
            time.sleep(2)
            functionalitychecks.click_browse_btn()
            functionalitychecks.click_help_btn()
        except:
            self.driver.close()
