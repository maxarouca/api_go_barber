import * as Yup from 'yup'
import Appointment from '../models/Appointment'

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.object().required(),
      date: Yup.date().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' })
    }
    return res.json()
  }
}

export default new AppointmentController()
