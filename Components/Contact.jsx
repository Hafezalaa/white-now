import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const message = watch("message", "");

  const onSubmit = (data) => {
    console.log(data);
    // send to backend / email service here
  };

  return (
    <section className="bg-sky-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">
            Ihre Anforderungen
          </h2>

          {/* Kundentyp */}
          <div>
            <label className="block font-medium mb-1">
              Kundentyp <span className="text-red-500">*</span>
            </label>
            <select
              {...register("customerType", { required: true })}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="">Bitte wählen</option>
              <option value="private">Privatkunde</option>
              <option value="business">Geschäftskunde</option>
            </select>
            {errors.customerType && (
              <p className="text-red-500 text-sm mt-1">
                Bitte wählen Sie einen Kundentyp
              </p>
            )}
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                Vorname <span className="text-red-500">*</span>
              </label>
              <input
                {...register("firstName", { required: true })}
                className="w-full border rounded-lg px-4 py-2"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  Vorname ist erforderlich
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">
                Nachname <span className="text-red-500">*</span>
              </label>
              <input
                {...register("lastName", { required: true })}
                className="w-full border rounded-lg px-4 py-2"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  Nachname ist erforderlich
                </p>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="w-full border rounded-lg px-4 py-2"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  Bitte geben Sie eine gültige E-Mail ein
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">
                Telefon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                {...register("phone", { required: true })}
                className="w-full border rounded-lg px-4 py-2"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  Telefonnummer ist erforderlich
                </p>
              )}
            </div>
          </div>

          {/* Räume */}
          <div>
            <label className="block font-medium mb-1">
              Art der Räumlichkeiten
            </label>
            <select
              {...register("propertyType")}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="">Bitte wählen</option>
              <option>Wohnung / Haus</option>
              <option>Büro</option>
              <option>Gewerbe</option>
              <option>Medizinische Einrichtung</option>
            </select>
          </div>

          {/* Größe */}
          <div>
            <label className="block font-medium mb-1">
              Größe der Räumlichkeiten (m²)
            </label>
            <input
              type="number"
              {...register("size")}
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* Intervalle */}
          <div>
            <label className="block font-medium mb-1">
              Gewünschte Reinigungsintervalle
            </label>
            <select
              {...register("interval")}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="">Bitte wählen</option>
              <option>Einmalig</option>
              <option>Wöchentlich</option>
              <option>14-tägig</option>
              <option>Monatlich</option>
            </select>
          </div>

          {/* Zeiten */}
          <div>
            <label className="block font-medium mb-1">
              Bevorzugte Reinigungszeiten
            </label>
            <select
              {...register("time")}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="">Bitte wählen</option>
              <option>Morgens</option>
              <option>Nachmittags</option>
              <option>Abends</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium mb-1">
              Besondere Anforderungen oder Bereiche
            </label>
            <textarea
              {...register("message", { maxLength: 1000 })}
              rows="4"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Beschreiben Sie hier Ihre Anforderungen..."
            />
            <p className="text-sm text-gray-400 mt-1">
              {message.length}/1000 Zeichen
            </p>
          </div>

          {/* Datenschutz */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              {...register("privacy", { required: true })}
              className="mt-1"
            />
            <p className="text-sm">
              Ich akzeptiere die Datenschutzerklärung
              <span className="text-red-500"> *</span>
            </p>
          </div>
          {errors.privacy && (
            <p className="text-red-500 text-sm">
              Bitte akzeptieren Sie die Datenschutzerklärung
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#62afdb] hover:bg-[#4fa0cc] text-white font-semibold py-3 rounded-lg transition"
          >
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
}
