import { useState, useCallback } from "react";
import axios from "axios";

const useAuth = () => {
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const Login = useCallback((jwttoken, user_id) => {
        // localStorage.setItem("user-info", JSON.stringify(user_id));
        localStorage.setItem("token", jwttoken);

    }, []);


    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({
            ...data,
            [input.name]: input.value,
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/auth/login";
            await axios.post(url, data).then(res => Login(res.data.token));
            // Login(res.data, res.users);
            window.location = "/";

        } catch (e) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        };

    }
    return { data, error, handleChange, handleSubmit };
}

export default useAuth;