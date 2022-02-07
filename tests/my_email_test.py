# pylint: disable=invalid-name
import smtplib
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_email():
    port = 587
    smtp_server = "smtp.gmail.com"
    login = "karungilydia43@gmail.com" 
    password = "" 

    subject = "Selenium Test Report results"
    sender_email = "karungilydia43@gmail"
    receiver_email = [  "lydiakarungi43@gmailm"]

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email


    html = open("reports/test_report.html")
    message = MIMEText(html.read(), 'html')
    message["Subject"] = subject

    text = message.as_string()

    # send your email
    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(login, password)
        server.sendmail(sender_email, receiver_email, text)

    print('Sent')
