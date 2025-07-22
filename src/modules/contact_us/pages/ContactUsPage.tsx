import { useState } from "react"
import Container from "../../../components/Container"
import { HiEnvelope, HiMap, HiMiniPhone } from "react-icons/hi2";
import Swal from 'sweetalert2'
import { submitMail } from "../../../services/mailService";
import { dotSpinner } from 'ldrs'


const ContactUsPage = () => {
  dotSpinner.register()


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async() => {
    if(formData.name && formData.email && formData.subject && formData.message){
      setIsSubmitting(true);
      let response = await submitMail(formData);
      if(response.ok) {
        setIsSubmitting(false);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Email sent successfully',
        })

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setIsSubmitting(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong',
        })
      }
    } else {
      setIsSubmitting(false);
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please fill all the fields',
      })
    }
  }
  return (
    <Container isNav className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-200 rounded-lg overflow-hidden">
        <div className="col-span-1">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us / Feedback</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button type="button" onClick={handleSubmit} className={`${isSubmitting ? 'pointer-events-none bg-blue-300' : 'bg-blue-500'} text-white px-4 py-2 rounded hover:bg-blue-600 w-full flex items-center justify-center gap-3`}>
                {isSubmitting ? 'Submitting. Plz wait ...' : 'Submit'}
                {isSubmitting && <l-dot-spinner
                    size="30"
                    speed="0.9" 
                    color="white" 
                  ></l-dot-spinner>}
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.4363790721723!2d95.00533527600537!3d20.199179715752546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b7d445379c3ea9%3A0x906a407ae1e843a9!2sTechnological%20University%20(Magway)!5e0!3m2!1sen!2smm!4v1753199124561!5m2!1sen!2smm" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 bg-slate-200 p-8 flex gap-5 items-center rounded-lg">
            <div>
              <HiMap size={40} className="text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Location</h3>
              <p className=""> Western Kanbya village beside the Naypyitaw-Kanbya Highway Rrgion, Kanbya</p>
            </div>
          </div>
         <div className="col-span-1 bg-slate-200 p-8 flex gap-5 items-center rounded-lg">
            <div>
              <HiEnvelope size={40} className="text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Mail</h3>
              <p className=""> tumgy@edu.com</p>
            </div>
          </div>
          <div className="col-span-1 bg-slate-200 p-8 flex gap-5 items-center rounded-lg">
            <div>
              <HiMiniPhone size={40} className="text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Location</h3>
              <p className=""> 06323750</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ContactUsPage
