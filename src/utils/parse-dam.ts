import { APIResponseDam, DamSystem } from "../@types";

const getDamCode = (name: string) => {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(" ", "-")
    .toLowerCase();
};

function removePercentage(value: string) {
  return value.replace(/%/g, "").trim();
}

export function parseDamSystem(dam: APIResponseDam): DamSystem {
  return {
    name: dam.name,
    code: getDamCode(dam.name),
    totalAmount: removePercentage(dam.data.volume_armazenado),
    dailyAmount: dam.data.pluviometria_do_dia,
  };
}
