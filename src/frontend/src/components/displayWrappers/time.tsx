import React, { FC } from "react";
import Moment from "react-moment";

interface TimeProps {
    value : Date
}

const Time: FC<TimeProps> = (props) => {
    const { value } = props;
    return (
        <Moment
            format="hh:mm A"
        >
            {value}
        </Moment>
    )
}

export default Time;