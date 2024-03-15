import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";
import { Users } from "../data/Users";

type PaymentMethodType = {
  nameOfCard: string;
  hexCode: string;
  date: string;
  cvv: string;
};

type DeliveryAddressType = {
  street: string;
  apartment: string;
  city: string;
  country: string;
};

type UserType = {
  name: string;
  email: string;
  password: string;
  paymentMethod?: PaymentMethodType;
  deliveryAddress?: DeliveryAddressType;
  deliveryOptions?: string;
  nonContactDelivery?: boolean;
  favorites?: any[];
  cart?: any[];
  changeCard?: (
    email: string,
    hexCode: string,
    date: string,
    cvv: string
  ) => void;
  changeAddress?: (
    email: string,
    street: string,
    apartment: string,
    city: string,
    country: string
  ) => void;
};

type UserContextType = {
  user: UserType;
  changeCard: (
    email: string,
    hexCode: string,
    date: string,
    cvv: string
  ) => void;
  changeAddress: (
    email: string,
    street: string,
    apartment: string,
    city: string,
    country: string
  ) => void;
};

export const UserContext = createContext<UserContextType>({
  user: {
    name: "Ugur",
    email: "ugur@gmail.com",
    password: "ugur1",
    paymentMethod: {
      nameOfCard: "Bank of Ugur",
      hexCode: "1234567812345678",
      date: "00/00 ",
      cvv: "555",
    },
    deliveryAddress: {
      street: "Somewhere",
      apartment: "000",
      city: "Baku",
      country: "Azerbaijan",
    },
    deliveryOptions: "I'll pick it up by myself",
    nonContactDelivery: false,
    favorites: [],
    cart: [],
  },
  changeCard: (email: string, hexCode: string, date: string, cvv: string) => {},
  changeAddress: (
    email: string,
    street: string,
    apartment: string,
    city: string,
    country: string
  ) => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserProviderProps> = ({
  children,
}: UserProviderProps) => {
  const authData = useAuth();
  const user = authData.getUser(authData.email, authData.password);

  const [hexCode, setHexCode] = useState(user?.paymentMethod?.hexCode || "");
  const [date, setDate] = useState(user?.paymentMethod?.date || "");
  const [cvv, setCvv] = useState(user?.paymentMethod?.cvv || "");

  const [street, setStreet] = useState(user?.deliveryAddress?.street || "");
  const [apartment, setApartment] = useState(
    user?.deliveryAddress?.apartment || ""
  );
  const [city, setCity] = useState(user?.deliveryAddress?.city || "");
  const [country, setCountry] = useState(user?.deliveryAddress?.country || "");

  const changeCard = (
    email: string,
    hexCode: string,
    date: string,
    cvv: string
  ) => {
    user.paymentMethod.hexCode = hexCode;
    user.paymentMethod.date = date;
    user.paymentMethod.cvv = cvv;

    setHexCode(hexCode);
    setDate(date);
    setCvv(cvv);

    const index = Users.findIndex(
      (u) => u.email === user.email && u.password === user.password
    );

    if (index !== -1) Users[index] = user;
  };

  const changeAddress = (
    email: string,
    street: string,
    apartment: string,
    city: string,
    country: string
  ) => {
    user.deliveryAddress.street = street;
    user.deliveryAddress.apartment = apartment;
    user.deliveryAddress.city = city;
    user.deliveryAddress.country = country;

    setStreet(street);
    setApartment(apartment);
    setCity(city);
    setCountry(country);

    const index = Users.findIndex(
      (u) => u.email === user.email && u.password === user.password
    );

    if (index !== -1) Users[index] = user;
  };

  const contextValue = { user, changeCard, changeAddress };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
