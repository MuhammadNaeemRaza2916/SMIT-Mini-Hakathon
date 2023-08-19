import fs from 'fs';
import path from 'path';
import { compare, hash } from 'bcryptjs'

const filePath = path.join(process.cwd(), "src", "data", "users.json")

export function getAll() {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}
export function getById(id) {
    const data = getAll();
    return data.find(p => p.id === Number(id))
}
export function getByEmail(confirmEmail) {
    const data = getAll();
    return data.find(p => p.confirmEmail.toLowerCase() === confirmEmail.toLowerCase())
}
export function getByEmail2(confirmEmail) {
    const data = getAll();
    return user = data.find(p => p.confirmEmail.toLowerCase() === confirmEmail.toLowerCase())
}

export async function verifyPassword(hashedPassword, password) {
    const isValid = await compare(password, hashedPassword)
    return isValid;
}
export async function save(firstName, lastName, confirmEmail, enterPassword, comfirmPassword) {
    const found = getByEmail(confirmEmail);
    if (found) {
        throw new Error("User Already Exits")
    }
    const hashedPassword = await hash(enterPassword, 12)
    const repeatHashedPassword = await hash(comfirmPassword, 12)
    const data = getAll();
    data.push({
        id: data.length + 1,
        firstName,
        lastName,
        confirmEmail,
        password: hashedPassword,
        repeatPassword: repeatHashedPassword
    })
    fs.writeFileSync(filePath, JSON.stringify(data));
}