import { FiInfo } from "react-icons/fi";
import {useEffect, useState} from "react";


const RESULTS = [
    { color: "#009966", result: "FAIBLE" },
    { color: "#fe9a00", result: "MODÉRÉ" },
    { color: "#fb2c36", result: "ÉLEVÉ" }
]


const OTHER_DRUGS  = [
    {
        id: "benzodiazepine",
        name: "Benzodiazépine",
        minDose: 1,
        maxDose: 4,
    },
    {
        id: "zdrug",
        name: "Z-drug",
        minDose: 1,
        maxDose: 2,
    },
    {
        id: "antidepressant",
        name: "Antidépresseur sédatif",
        minDose: 2,
        maxDose: 4,
    },
    {
        id: "antagoniste",
        name: "Antagoniste de l'orexine",
        minDose: 3,
        maxDose: 4,
    },
]

const DRUGS = [
    {
        id: "diazepam",
        name: "Diazépam",
        brand: "Valium",
        halfLife: "20–50 h",
        intensity: 4
    },
    {
        id: "lorazepam",
        name: "Lorazépam",
        brand: "Ativan",
        halfLife: "10–20 h",
        intensity: 3
    },
    {
        id: "temazepam",
        name: "Témazépam",
        brand: "Restoril",
        halfLife: "8–15 h",
        intensity: 2
    },
    {
        id: "triazolam",
        name: "Triazolam",
        brand: "Halcion",
        halfLife: "2–5 h",
        intensity: 1
    },
    {
        id: "zopiclone",
        name: "Zopiclone",
        brand: "Imovane",
        halfLife: "5 h",
        intensity: 2
    },
    {
        id: "zolpidem",
        name: "Zolpidem",
        brand: "Stilnox",
        halfLife: "2–3 h",
        intensity: 1
    },
    {
        id: "trazodone",
        name: "Trazodone",
        brand: "Desyrel",
        halfLife: "5–9 h",
        intensity: 2
    },
    {
        id: "amitriptyline",
        name: "Amitriptyline",
        brand: "Elavil",
        halfLife: "10–50 h",
        intensity: 4
    },
    {
        id: "mirtazapine",
        name: "Mirtazapine",
        brand: "Remeron",
        halfLife: "20–40 h",
        intensity: 4
    },
    {
        id: "melatonin",
        name: "Mélatonine",
        brand: "—",
        halfLife: "0.5 h (≈30 min)",
        intensity: 0
    },
    {
        id: "suvorexant",
        name: "Suvorexant",
        brand: "Belsomra",
        halfLife: "12 h",
        intensity: 3
    },
    {
        id: "lemborexant",
        name: "Lemborexant",
        brand: "Dayvigo",
        halfLife: "17–19 h",
        intensity: 4
    }
];


export function HomePage() {

    const [isPrise, setIsPrise] = useState(false);
    const [isHepatic, setIsHepatic] = useState(false);
    const [isSleep, setIsSleep] = useState(false);
    const [alcoholIntake, setAlcoholIntake] = useState(0);


    const [age, setAge] = useState(35);
    const [height, setHeight] = useState(165);
    const [weight, setWeight] = useState(62);
    const [imc, setImc] = useState(22.8);
    const [imcPoint, setImcPoint] = useState(0);
    const [selectedDrug, setSelectedDrug] = useState("");

    const [otherDrug, setOtherDrug] = useState(null);
    const [drugIntensity, setDrugIntensity] = useState(4);



    const pointAge = age < 55 ? 0 : age < 65 ? 1 : 2;
    const pointPrise = isPrise ? 4 : 0;
    const pointHepatic = isHepatic ? 3 : 0;
    const pointSleep = isSleep ? 5 : 0;
    const pointAlcohol = alcoholIntake > 1 ? 3 : 0;


    const totalPoints =
        pointAge + imcPoint + drugIntensity + pointPrise +
        pointAlcohol + pointHepatic + pointSleep;



    const getResult =
        totalPoints <= 4 ? RESULTS[0] :
            totalPoints <= 8 ? RESULTS[1] :
                RESULTS[2];



    useEffect(() => {
        const drug = OTHER_DRUGS.find(drug => drug.id === selectedDrug) || null
        setOtherDrug(drug);
    }, [selectedDrug]);

    useEffect(() => {
        const drug = DRUGS.find(
            drug => drug.id === selectedDrug
        );
        if (drug) setDrugIntensity(drug.intensity)
    }, [selectedDrug]);

    useEffect(() => {
        const imc = Number((weight / (height / 100) ** 2).toFixed(1));
        setImc(imc);

        const calculImc =   imc < 25 ? 0 : imc >= 30 ? 2 : 1;
        setImcPoint(calculImc);
    }, [weight, height]);

    function resetBtn() {
        setAge(35);
        setHeight(165);
        setWeight(62);
        setSelectedDrug("diazepam");
        setIsPrise(false);
        setIsHepatic(false);
        setIsSleep(false);
        setAlcoholIntake(0);
    }


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
                    <div className="card subtle-border" style={{padding: "20px"}}>
                        <div className="columns is-centered is-mobile is-multiline">
                            <div className="column is-half-desktop is-half-tablet is-full-mobile">
                                <p className="has-text-black has-text-weight-semibold pb-1" style={{fontSize: "15px"}}>
                                    Sexe
                                </p>

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

                                <input className="input" type="number" value={age} min="0" step="1"
                                       onChange={(e) => setAge(Number(e.target.value))}/>
                                <p className="has-text-grey is-size-7 mb-1">Points âge: {pointAge}</p>
                            </div>
                        </div>
                        <div className="columns is-centered is-mobile is-multiline">
                            <div className="column is-full-mobile">
                                <p className="has-text-black has-text-weight-semibold pb-1" style={{fontSize: "15px"}}>
                                    Taille (cm)
                                </p>

                                <input className="input" type="number" value={height} min="0" step="1"
                                       onChange={(e) => setHeight(Number(e.target.value))}/>
                            </div>

                            <div className="column is-full-mobile">
                                <p className="has-text-black has-text-weight-semibold pb-1" style={{fontSize: "15px"}}>
                                    Poids (kg)
                                </p>

                                <input className="input" type="number" value={weight} min="0" step="1"
                                       onChange={(e) => setWeight(Number(e.target.value))}/>
                            </div>

                            <div className="column is-full-mobile">
                                <p className="has-text-black has-text-weight-semibold pb-1" style={{fontSize: "15px"}}>
                                    IMC (calculé)
                                </p>

                                <input className="input" type="number" value={imc} readOnly={true}/>
                                <p className="has-text-grey is-size-7 mb-1">Points IMC: {imcPoint}</p>
                            </div>

                        </div>

                        <div className="columns is-centered is-mobile is-multiline">
                            <div className="column is-full">
                                <p className="has-text-black has-text-weight-semibold pb-1" style={{fontSize: "15px"}}>
                                    Médicament pris (au coucher)
                                </p>

                                <div className="control is-expanded">
                                    <div className="select is-fullwidth custom-select pb-1">
                                        <select value={selectedDrug} onChange={(e) => setSelectedDrug(e.target.value)}>
                                            {
                                                DRUGS.map((drug) => (
                                                    <option key={drug.id} value={drug.id}>
                                                        {drug.name}
                                                        {drug.brand !== "—" && ` (${drug.brand})`}
                                                    </option>
                                                ))
                                            }
                                            {
                                                OTHER_DRUGS.map((drug) => (
                                                    <option key={drug.id} value={drug.id}>
                                                        (Autre) {drug.name} — {drug.brand} choisir intensité
                                                    </option>
                                                ))
                                            }

                                        </select>
                                    </div>
                                </div>

                            </div>
                            {
                                otherDrug &&
                                <div className="column is-full">
                                    <p className="has-text-black has-text-weight-semibold pb-1"
                                       style={{fontSize: "15px"}}>
                                        Intensité au sein de la classe
                                    </p>
                                    {
                                        <input
                                            className="slider"
                                            type="range"
                                            min={otherDrug.minDose}
                                            max={otherDrug.maxDose}
                                            step={1}
                                            onChange={(e) => setDrugIntensity(Number(e.target.value))}
                                        />
                                    }
                                    <p className="has-text-grey is-size-7 mb-1">Points
                                        médicament: {drugIntensity}</p>
                                </div>
                            }

                        </div>

                        <div className="columns is-mobile is-multiline">
                            <div className="column is-full-mobile">
                                <div className="subtle-border-sm flex">
                                    <div className="columns is-vcentered is-mobile">
                                        <div className="column">
                                            <p className="has-text-black has-text-weight-semibold" style={{fontSize: "15px"}}> Prise &lt; 6 h avant conduite </p>
                                            <p className="has-text-grey is-size-7">+4 si oui</p>
                                        </div>
                                        <div className="column is-narrow">
                                            <label className="switch">
                                                <input
                                                    type="checkbox"
                                                    checked={isPrise}
                                                    onChange={(e) => setIsPrise(e.target.checked)}
                                                />
                                                <span className="slide"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column is-full-mobile">
                                <div className="subtle-border-sm flex">
                                    <p className="has-text-black has-text-weight-semibold" style={{fontSize: "15px"}}> Consommation moyenne (verres/jour) </p>
                                    <input className="input" type="number" value={alcoholIntake} min="0" step="1"
                                           onChange={(e) => setAlcoholIntake(Number(e.target.value))}/>

                                    <p className="has-text-grey is-size-7">Seuil: > 1 verres/j → +3</p>
                                </div>
                            </div>
                        </div>

                        <div className="columns is-mobile is-multiline">
                            <div className="column is-full-mobile">
                                <div className="subtle-border-sm flex">
                                    <div className="columns is-vcentered is-mobile">
                                        <div className="column">
                                            <p className="has-text-black has-text-weight-semibold" style={{fontSize: "15px"}}> Atteinte hépatique </p>
                                            <p className="has-text-grey is-size-7">+3 si oui</p>
                                        </div>
                                        <div className="column is-narrow">
                                            <label className="switch">
                                                <input
                                                    type="checkbox"
                                                    checked={isHepatic}
                                                    onChange={(e) => setIsHepatic(e.target.checked)}
                                                />
                                                <span className="slide"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column is-full-mobile">
                                <div className="subtle-border-sm flex">
                                    <div className="columns is-vcentered is-mobile">
                                        <div className="column">
                                            <p className="has-text-black has-text-weight-semibold" style={{fontSize: "15px"}}> ATCD de somnolence au volant </p>
                                            <p className="has-text-grey is-size-7">+5 si oui</p>
                                        </div>
                                        <div className="column is-narrow">
                                            <label className="switch">
                                                <input
                                                    type="checkbox"
                                                    checked={isSleep}
                                                    onChange={(e) => setIsSleep(e.target.checked)}
                                                />
                                                <span className="slide"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="columns is-mobile is-multiline">
                            <div className="column">
                                <div className="button has-background-grey-lighter " onClick={resetBtn}>
                                    <p className="has-text-black has-text-weight-semibold">Réinitialiser</p>
                                </div>
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

                                <div className="result" style={{backgroundColor: getResult.color}}>
                                    <span className="has-text-white has-text-weight-semibold">
                                        { getResult.result }
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
                                            Alcool
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
                                            {pointAge} {/* age*/}
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            {imcPoint} {/* IMC*/}
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            {drugIntensity} {/* Médicament*/}
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            {pointPrise} {/* Prise > 6h*/}
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            {pointAlcohol} {/* Alcool*/}
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            {pointHepatic} {/* Atteinte hépatique*/}
                                        </p>
                                        <p className="has-text-black has-text-weight-semibold" style={{ fontSize: "15px" }}>
                                            {pointSleep} {/* Somnolence au volant (ATCD)*/}
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
                        DRUGS.map((drug) => (
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
