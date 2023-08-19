import { save } from "@/services/user";


export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(404).send()
    }
    const { firstName, lastName, confirmEmail, enterPassword, comfirmPassword } = req.body;
    try {
        save( firstName, lastName, confirmEmail, enterPassword, comfirmPassword );
        res.status(201).send()
    } catch (err) {
        alert("User Already Exist!")
        res.status(400).json("message", err)
    }

}