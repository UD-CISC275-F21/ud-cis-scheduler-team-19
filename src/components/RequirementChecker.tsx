import React from "react";

const Reqcheck: React.FunctionComponent = () => {
    const reqlist: string[] = [
        "CISC108",
        "CISC181",
        "CISC210",
        "CISC220",
        "CISC260",
        "CISC275",
        "CISC303",
        "CISC320",
        "CISC361",
        "CISC372",
        "300 (Or Above) Technical Elective 1",
        "300 (Or Above) Technical Elective 2",
        "Focus Area Course 1",
        "Focus Area Course 2",
        "Focus Area Course 3",
        "Focus Area Course 4",
        "MATH205 or MATH350",
        "MATH210",
        "MATH241",
        "MATH242",
        "Capstone",
        "Twelve Credits of Laboratory Science"
    ];  
    return (
        <div style={styles.container}>
            {reqlist.map((value, index) => {
                return <div style={styles.reqItem} key={index}>
                    <span style={styles.courseID}>{reqlist[index]}</span>
                    <span>
                        <input type="checkbox" />
                    </span>
                </div>;
            })}
        </div>
    );
};

// Styling
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: 450,
        position: "relative",
        top: 0,
        right: 0,
    },
    reqItem: {
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        margin: "6px 0",
        padding: "8px 15px",
        backgroundColor: "#35a1e0",
    },
    courseID: {
        width: "90%",
    }
};

export default Reqcheck;
