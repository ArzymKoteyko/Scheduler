import React from "react";
import "../../css/month_widget.css"

function* generateDaySequence(year: number, month: number) {
    let days_in_month: number = (new Date(year, month, 0)).getDate();
    let start_day: number = 1 - (new Date(year, month - 1, 0)).getDay();
    let end_day: number = days_in_month + (7 - (new Date(year, month, 0)).getDay());
    for (let i = start_day; i < end_day + 1; ++i) {
        let imonth = (new Date(year, month - 1, i)).getMonth();
        let iweekday = (new Date(year, month - 1, i)).getDay();
        let iday = (new Date(year, month - 1, i)).getDate();
        yield {
            "day": iday,
            "current": imonth == month - 1,
            "weekend": (iweekday == 6) || (iweekday == 0),
        };
    }
}

type Props = {}
type State = { year, month, weeks_numbers, weeks_labels, dates }
export class MonthWidget extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            year: 2023,
            month: 2,
            weeks_numbers: [52, 1, 2, 3, 4, 5],
            weeks_labels: ["Mo", "Tu", "We", "Th", "Fr", "St", "Su"],
            dates: [...generateDaySequence(2023, 2)]
        }
    }

    render(): React.ReactNode {
        return (<>
            <div className="MonthWidget">
                <h3>January</h3>
                <div className="date_contanier">
                    <h4><p>1</p></h4>
                    <ul className="weeks_numbers">
                        {this.state.weeks_numbers.map((label) => { return <li><p style={{ color: "yellow" }}>{label}</p></li> })}
                    </ul>
                    <ul className="weeks_labels">
                        {this.state.weeks_labels.map((label) => { return <li><p>{label}</p></li> })}
                    </ul>
                    <ul className="dates">
                        {this.state.dates.map((label) => {
                            if (label["current"])
                                if (label["weekend"])
                                    return <li><p style={{ color: "red" }}>{label["day"]}</p></li>
                                else
                                    return <li><p>{label["day"]}</p></li>
                            else
                                return <li><p style={{ color: "grey" }}>{label["day"]}</p></li>
                        })}
                    </ul>
                </div>
            </div>
        </>)
    }
}