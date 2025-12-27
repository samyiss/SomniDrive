export function HomePage() {


    const drugs = [
        {
            id: "diazepam",
            name: "Diazépam",
            brand: "Valium",
            halfLife: "20–50 h"
        },
        {
            id: "lorazepam",
            name: "Lorazépam",
            brand: "Ativan",
            halfLife: "10–20 h"
        },
        {
            id: "temazepam",
            name: "Témazépam",
            brand: "Restoril",
            halfLife: "8–15 h"
        },
        {
            id: "triazolam",
            name: "Triazolam",
            brand: "Halcion",
            halfLife: "2–5 h"
        },
        {
            id: "zopiclone",
            name: "Zopiclone",
            brand: "Imovane",
            halfLife: "5 h"
        },
        {
            id: "zolpidem",
            name: "Zolpidem",
            brand: "Stilnox",
            halfLife: "2–3 h"
        },
        {
            id: "trazodone",
            name: "Trazodone",
            brand: "Desyrel",
            halfLife: "5–9 h"
        },
        {
            id: "amitriptyline",
            name: "Amitriptyline",
            brand: "Elavil",
            halfLife: "10–50 h"
        },
        {
            id: "mirtazapine",
            name: "Mirtazapine",
            brand: "Remeron",
            halfLife: "20–40 h"
        },
        {
            id: "melatonin",
            name: "Mélatonine",
            brand: "—",
            halfLife: "0.5 h (≈30 min)"
        },
        {
            id: "suvorexant",
            name: "Suvorexant",
            brand: "Belsomra",
            halfLife: "12 h"
        },
        {
            id: "lemborexant",
            name: "Lemborexant",
            brand: "Dayvigo",
            halfLife: "17–19 h"
        }
    ];


    return (
        <main className="p-8 has-background-white-ter">
            <div className="columns pt-6 has-text-centered">
                <svg
                    className="pb-4"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path
                        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                    <circle cx="7" cy="17" r="2"></circle>
                    <path d="M9 17h6"></path>
                    <circle cx="17" cy="17" r="2"></circle>
                </svg>

                <p className="title has-text-weight-bold has-text-black">
                    SomniDrive Risk — Calculateur
                </p>
            </div>

            <div className="columns is-3">
                <div className="column is-8">
                    <div className="box subtle-border">
                        First column
                    </div>
                </div>
                <div className="column">
                    <div className="box subtle-border">
                        First column
                    </div>
                </div>
            </div>



            <div className="columns pt-6 has-text-right">
                <p className="subtitle pl-4 has-text-weight-semibold has-text-black">
                    Annexe : demi‑vies (h) — repères rapides
                </p>
            </div>

            <div className="columns is-3">
                <div className="column is-8">
                    <div className="box subtle-border">
                        First column
                    </div>
                </div>
                <div className="column">
                    <div className="box subtle-border">
                        First column
                    </div>
                </div>
            </div>

        </main>
    );
}
