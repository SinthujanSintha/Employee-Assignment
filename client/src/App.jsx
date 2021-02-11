import {useState, useEffect} from "react";
function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [bank, setBank] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://localhost:9000/api/employee/employeeList")
            .then(res => res.json())
            .then(
                (bankData) => {
                    setIsLoaded(true);
                    setBank(bankData);
                    console.log(bankData)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (<div>
                <p>{bank.bank_name}</p>

                    {bank.branch.map(branch => (
                            <div key={branch._id}>
                                {branch.branch_name}
                                {branch.employee.map(function (employee, i) {
                                    return <div key={i}>
                                        <h5>{employee.emp_name}</h5>
                                        <p>{employee.emp_email}</p>
                                        <p>{employee.emp_photo}</p>
                                        <p>{employee.password}</p>
                                    </div>
                                })}
                            </div>
                        ))}

            </div>
        );
    }
}


export default App;
