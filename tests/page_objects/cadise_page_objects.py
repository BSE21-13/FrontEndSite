
""" This file is a collection of all the page elements and the action methods 
    of all the pages.

    The elements are identified using;
        -- xpath (Relative xpath recommended)

    The action methods perform the actions on the page like;
        -- clicking
        -- verifying if elements are enabled and displayed
        -- Sending keys
        -- Selecting elements
"""
class CadisePageElements:
    search_bar_xpath = "//input[@type='text']"
    need_lawyer_btn_xpath = "//span[normalize-space()='Need a lawyer?']"
    legal_supporter_label = "//h3[normalize-space()='Our registered legal support partners.']"
    send_email_btn_xpath = "//div[@class='searchPage__results']//div[2]//div[2]//button[1]//span[1]"

    browse_btn_xpath = "//span[normalize-space()='BROWSE THE CONSTITUTION']"
    get_lawyer_btn = "//span[normalize-space()='GET A LAWYER']"
    help_btn_xpath = "//span[normalize-space()='HELP']"

    