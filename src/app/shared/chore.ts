export class Chore{
    id :string;
    nom_corvee :string;
    arrondissement :string;
    type_lieu :["Rue","Ruelle", "Parc", "Place publique", "Berges", "Autres" ];
    emplacement :string;
    latitude :number;
    longitude :number;
    informations_supplementaires: string;
    date_debut_corvee :Date;
    date_fin_corvee :Date;
    en_cas_de_pluie :string;
    date_report_corvee_en_cas_pluie :string;
    type_corvee :string;
    paramètre_inscription :string;
    nombre_max_participants :number;
    nombre_participants_inscrits :number;

}