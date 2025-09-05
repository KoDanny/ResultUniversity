interface ICreditParams {
	price: number;
	discount: number;
	isInstallment?: boolean;
	months: number;
}

type TotalPrice = (params: ICreditParams) => number;

export const totalPrice: TotalPrice = ({
	price,
	discount,
	isInstallment,
	months,
}) => {
	if (isInstallment) {
		const discountPrice = price - price * (discount / 100);
		return Math.round(discountPrice / months);
	}
	//Тут должна быть логика начисления процентов, если это не рассрочка, но я ее не знаю
	return Math.round(price / months);
};
