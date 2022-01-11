import configparser

config = configparser.RawConfigParser()
config.read("../tests/configurations/config.ini")

class ReadConfig:
    """This class consists of methods that retrieve
    information from the configuration file"""

    @staticmethod
    def get_application_url():
        """This method retrieves the URL from config file"""
        url = config.get('Common required information', 'base_url')
        return url

    @staticmethod
    def get_cadise_page_title():
        cadise_page_title = config.get(
            'Common required information',
            'cadise_page_title'
        )
        return cadise_page_title
