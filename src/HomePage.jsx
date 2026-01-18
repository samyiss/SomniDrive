import { FiInfo } from "react-icons/fi";
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HomePage() {

    const color = "#23d160"; // Bulma's "danger" color
    const result = "FAIBLE";

    const results = [
        { color: "#23d160", result: "FAIBLE" },
        { color: "#ffdd57", result: "MODÉRÉ" },
        { color: "#ff1700", result: "ÉLEVÉ" }
    ]


    const [getAge, setAge] = useState(35);
    const [getHeight, setHeight] = useState(165);
    const [getWeight, setWeight] = useState(62);
    const [getIMC, setIMC] = useState(22.8);
    const [getimcP, setimcP] = useState(0);

    useEffect(() => {
        const imc = Number((getWeight / (getHeight / 100) ** 2).toFixed(1));
        setIMC(imc);

        setimcP(getImcPoints(imc));
    }, [getWeight, getHeight]);

    function getImcPoints(imc) {
        if (imc >= 18.5 && imc < 25) return 3;
        if (imc >= 25 && imc < 30) return 1;
        if (imc >= 30) return 0;
        return 2;
    }


    const [getDrop, setDrop] = useState(false);

    const options = ["Femme", "Homme"];
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Femme");

    useEffect(() => {
        console.log(getAge);
        console.log(getIMC);
    })


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
        <main className="p-5 has-background-white-ter">
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

            <div className="columns">
                <div className="column is-8">
                    <div className="card subtle-border" style={{ padding: "20px" }}>
                        <div className="columns is-vcentered is-mobile is-multiline">
                            <div className="column is-half-desktop is-half-tablet is-full-mobile">
                                <p className="has-text-black has-text-weight-semibold" style={{fontSize: "15px"}}>
                                    sexe
                                </p>

                                <div className={`dropdown is-fullwidth ${open ? "is-active" : ""}`}>
                                    <div className="dropdown-trigger is-fullwidth">
                                        <button
                                            className="button is-justify-content-space-between"
                                            onClick={() => setOpen(!open)}
                                        >
                                            <span>{value}</span>
                                            <span className="icon is-small">
                                                <i className="fas fa-angle-down"></i>
                                            </span>
                                        </button>
                                    </div>

                                    <div className="dropdown-menu is-fullwidth">
                                        <div className="dropdown-content is-fullwidth">
                                            {["Femme", "Homme"].map(option => (
                                                <a
                                                    key={option}
                                                    className={`dropdown-item ${
                                                        value === option ? "is-selected" : ""
                                                    }`}
                                                    onClick={() => {
                                                        setValue(option);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    <span>{option}</span>

                                                    {value === option && (
                                                        <span className="icon has-text-success">
                                                            <FontAwesomeIcon icon="fa-thin fa-check"/>
                                                        </span>
                                                    )}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="field">
                                <div className="control is-expanded">
                                    <div className="select is-fullwidth custom-select">
                                        <select>
                                            <option>Femme</option>
                                            <option>Homme</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="column is-half-desktop is-half-tablet is-full-mobile">
                                <p className="has-text-black has-text-weight-semibold pb-1" style={{fontSize: "15px"}}>
                                    Âge (années)
                                </p>

                                <input className="input" type="number" defaultValue={getAge} min="0" step="1" onChange={(e) => setAge(Number(e.target.value))} />
                                <p className="has-text-grey is-size-7 mb-1">Points âge: 0</p>
                            </div>
                        </div>
                        <div className="columns is-centered is-mobile is-multiline">
                            <div className="column is-full-mobile">
                                <p className="has-text-black has-text-weight-semibold pb-1" style={{fontSize: "15px"}}>
                                    Taille (cm)
                                </p>

                                <input className="input" type="number" defaultValue={getHeight} min="0"  step="1" onChange={(e) => setHeight(Number(e.target.value))}/>
                            </div>

                            <div className="column is-full-mobile">
                                <p className="has-text-black has-text-weight-semibold pb-1" style={{fontSize: "15px"}}>
                                    Poids (kg)
                                </p>

                                <input className="input" type="number" defaultValue={getWeight} min="0"  step="1" onChange={(e) => setWeight(Number(e.target.value))}/>
                            </div>

                            <div className="column is-full-mobile">
                                <p className="has-text-black has-text-weight-semibold pb-1" style={{fontSize: "15px"}}>
                                    IMC (calculé)
                                </p>

                                <input className="input" type="number" value={getIMC} readOnly={true} />
                                <p className="has-text-grey is-size-7 mb-1">Points IMC: {getimcP}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="column">
                <div className="card subtle-border">
                        <div className="columns is-vcentered is-mobile">
                            <div className="column is-1">
                                <FiInfo className="has-text-weight-bold" size={20}/>
                            </div>

                            <p className="column is-size-5 has-text-weight-semibold has-text-black pb-4">
                                Résultat
                            </p>
                        </div>

                        <div>
                            <div className="result" style={{backgroundColor: color}}>
                                <span className="has-text-white has-text-weight-semibold">
                                    { result }
                                </span>
                            </div>


                                <div className="columns is-mobile pr-2 pt-5">
                                    <div className="column">
                                        <p className="has-text-black" style={{ fontSize: "15px" }}>
                                            Âge
                                        </p>
                                        <p className="has-text-black" style={{ fontSize: "15px" }}>
                                            IMC
                                        </p>
                                        <p className="has-text-black" style={{ fontSize: "15px" }}>
                                            Médicament
                                        </p>
                                        <p className="has-text-black" style={{ fontSize: "15px" }}>
                                            Prise &gt; 6h
                                        </p>
                                        <p className="has-text-black" style={{ fontSize: "15px" }}>
                                            Atteinte hépatique
                                        </p>
                                        <p className="has-text-black" style={{ fontSize: "15px" }}>
                                            Somnolence au volant (ATCD)
                                        </p>
                                    </div>
                                    <div className="column is-1 pr-2">
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            0
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            0
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            4
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            0
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            0
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            0
                                        </p>

                                    </div>
                                </div>




                            <div className="subtle-border-sm is-size-6">
                                <p style={{ fontSize: "15px" }}>
                                    Seuils de catégorisation :
                                    0–4 = faible;
                                    5–8 = modéré (considérer délai > 8 h);
                                    ≥ 9 = élevé — conduite déconseillée.
                                </p>
                            </div>
                            <p className="subtitle is-size-7 has-text-grey pt-5">
                                Cet outil n’est pas un avis médical définitif. Utiliser avec jugement clinique; tenir compte de la dose, co‑médication, comorbidités et contexte.
                            </p>
                        </div>

                    </div>
                </div>
            </div>


            <div className="pt-6 pb-6">
                <div className="has-text-left has-text-centered-mobile">
                    <p className="subtitle has-text-weight-semibold has-text-black pb-4">
                        Annexe : demi‑vies (h) — repères rapides
                    </p>
                </div>

                <div className="columns is-multiline is-mobile is-centered">
                    {
                        drugs.map((drug) => (
                            <div className="column is-4-tablet is-3-desktop mb-auto is-5-mobile" key={drug.id}>
                                <div className="card subtle-border p-3">
                                    <p className="has-text-weight-semibold has-text-black">{drug.name}</p>
                                    <p className="has-text-grey is-size-7 mb-1">{drug.brand}</p>
                                    <p className="has-text-black">
                                        t<sub>1/2</sub>: {drug.halfLife}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </main>
    );
}
