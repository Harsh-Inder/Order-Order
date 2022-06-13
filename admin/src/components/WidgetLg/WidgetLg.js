import './widgetLg.css';

const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle"> Latest transactions </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh"> Customer </th>
                    <th className="widgetLgTh"> Date </th>
                    <th className="widgetLgTh"> Amount </th>
                    <th className="widgetLgTh"> Status </th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                            alt="" 
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName"> Carol Denver </span>
                    </td>
                    <td className="widgetLgDate"> 10 June 2022 </td>
                    <td className="widgetLgAmount"> $122.00 </td>
                    <td className="widgetLgStatus"> 
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                            alt="" 
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName"> Carol Denver </span>
                    </td>
                    <td className="widgetLgDate"> 10 June 2022 </td>
                    <td className="widgetLgAmount"> $122.00 </td>
                    <td className="widgetLgStatus"> 
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                            alt="" 
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName"> Carol Denver </span>
                    </td>
                    <td className="widgetLgDate"> 10 June 2022 </td>
                    <td className="widgetLgAmount"> $122.00 </td>
                    <td className="widgetLgStatus"> 
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                            alt="" 
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName"> Carol Denver </span>
                    </td>
                    <td className="widgetLgDate"> 10 June 2022 </td>
                    <td className="widgetLgAmount"> $122.00 </td>
                    <td className="widgetLgStatus"> 
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg