/* ============================================================
   RiverGuard Contact Form Section
   Design: Shield Protocol (Premium SaaS Dark)
   Formulário de contato com validação e integração FormSubmit
   ============================================================= */

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubLogoIcon } from "@phosphor-icons/react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = { nome: "", email: "", assunto: "", mensagem: "" };
    let isValid = true;

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
      isValid = false;
    }

    if (!formData.assunto.trim()) {
      newErrors.assunto = "Assunto é obrigatório";
      isValid = false;
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
      isValid = false;
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = "Mensagem deve ter pelo menos 10 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const formDataObj = new FormData(formElement);

      const response = await fetch("https://formsubmit.co/3297e354cd75968740872847bfa4620c", {
        method: "POST",
        body: formDataObj,
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setErrors((prev) => ({ ...prev, nome: "Erro ao enviar. Tente novamente." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm font-semibold tracking-widest">ENTRE EM CONTATO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tem dúvidas sobre o <span className="text-blue-400">RiverGuard</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Envie uma mensagem para nosso time. Responderemos em até 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-slate-400 text-sm">contato@riverguard.com</p>
              </div>
            </div>
          </div>

          <a href="https://github.com/Grupo-03-Turma-JavaScript-13" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/70 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <GithubLogoIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">GitHub</h3>
                <p className="text-slate-400 text-sm">Grupo-03-Turma-JavaScript-13</p>
              </div>
            </div>
          </a>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Endereço</h3>
                <p className="text-slate-400 text-sm">São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-8 md:p-12">
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
              <p className="text-green-400 font-semibold">✓ Mensagem enviada com sucesso! Obrigado pelo contato.</p>
            </div>
          )}

          <form
            id="formulario"
            action="https://formsubmit.co/3297e354cd75968740872847bfa4620c"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.origin + "/?success=true"} />

            {/* Nome e Email - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="field">
                <label htmlFor="nome" className="block text-white font-semibold mb-2">
                  Nome Completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Digite o seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
                    errors.nome ? "border-red-500" : "border-slate-600"
                  }`}
                />
                {errors.nome && <span className="text-red-400 text-sm mt-1 block">{errors.nome}</span>}
              </div>

              {/* Email */}
              <div className="field">
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
                    errors.email ? "border-red-500" : "border-slate-600"
                  }`}
                />
                {errors.email && <span className="text-red-400 text-sm mt-1 block">{errors.email}</span>}
              </div>
            </div>

            {/* Assunto - Full Width */}
            <div className="field full">
              <label htmlFor="assunto" className="block text-white font-semibold mb-2">
                Assunto
              </label>
              <input
                id="assunto"
                name="assunto"
                type="text"
                placeholder="Qual é o assunto da sua mensagem?"
                value={formData.assunto}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 ${
                  errors.assunto ? "border-red-500" : "border-slate-600"
                }`}
              />
              {errors.assunto && <span className="text-red-400 text-sm mt-1 block">{errors.assunto}</span>}
            </div>

            {/* Mensagem - Full Width */}
            <div className="field full">
              <label htmlFor="mensagem" className="block text-white font-semibold mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Digite a sua mensagem aqui..."
                value={formData.mensagem}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none ${
                  errors.mensagem ? "border-red-500" : "border-slate-600"
                }`}
              />
              {errors.mensagem && <span className="text-red-400 text-sm mt-1 block">{errors.mensagem}</span>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
