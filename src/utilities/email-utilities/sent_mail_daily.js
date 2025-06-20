const cron = require("node-cron");
const emailer = require("nodemailer")
const { dob_cur_date } = require("../../models/aadharUsers/cron-model-dob/selectDob")

const transporter = emailer.createTransport({
    service: 'gmail',
    auth:{
        user:'',
        pass:''
    }
});

const sendBirthdayEmails = async () => {
    const users = await dob_cur_date();
    try{
        for(const user of users){
            const mailOptions = {
                from:'',
                to:user.email_id,
                subject:'Happy Birthday! 🎉',
                text: `Dear ${user.first_name} ${user.last_name},\n\nWishing you a very Happy Birthday!\n\nBest Regards,\nUidai`
            };

            await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${user.email_id}`);
        } 
    } catch (error){
        console.error('Error sending birthday emails:', error);
    }
}
cron.schedule('0 9 * * *', () => {
    console.log('Running birthday email scheduler at 9 AM');
    sendBirthdayEmails();
})

module.exports = { sendBirthdayEmails };