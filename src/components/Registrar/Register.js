import { useState } from "react";
import './Registrar.css';

export default function RegistroPessoa() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        dataNascimento: "",
        endereco: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Cadastro realizado:\nNome: ${formData.nome}\nE-mail: ${formData.email}\nTelefone: ${formData.telefone}\nData de Nascimento: ${formData.dataNascimento}\nEndereço: ${formData.endereco}`);
        setFormData({ nome: "", email: "", telefone: "", dataNascimento: "", endereco: "" });
    };

    return (
        <div className="container_registrar">
            <h2 className="">Cadastro</h2>
            <form className="form_registrar" onSubmit={handleSubmit}>
                <input type="text" name="nome" placeholder="Nome"
                    value={formData.nome} onChange={handleChange} className="w-full p-2 border rounded mb-2"
                />
                <input type="email" name="email"
                    placeholder="E-mail" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded mb-2"
                />
                <input type="tel" name="telefone"
                    placeholder="Telefone" value={formData.telefone} onChange={handleChange} className="w-full p-2 border rounded mb-2"
                />
                <input type="date" name="dataNascimento"
                    placeholder="Data de Nascimento" value={formData.dataNascimento} onChange={handleChange} className="w-full p-2 border rounded mb-2"
                />
                <input type="text" name="endereco"
                    placeholder="Endereço" value={formData.endereco} onChange={handleChange} className="w-full p-2 border rounded mb-2"
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}
