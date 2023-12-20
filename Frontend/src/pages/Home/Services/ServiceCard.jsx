import ServiceImg from "../../../assets/images/services/1.jpg"

const ServiceCard = () => {
    return (
        <div className="gap-4">
            <img className="w-80 h-52 rounded-lg" src={ServiceImg} alt="" />
            <h2 className="text-2xl pt-4">Electrical System</h2>
            <h3 className="text-xl text-rose-600 font-medium pb-4">Price: $ 20.00</h3>
        </div>
    );
};

export default ServiceCard;