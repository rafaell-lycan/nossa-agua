export type DamSystem = {
  name: string;
  code: string;
  totalAmount: string;
  dailyAmount: string;
};

export type APIResponseDam = {
  name: string;
  data: {
    volume_armazenado: string;
    pluviometria_do_dia: string;
  };
};

export type APIResponse = APIResponseDam[];
