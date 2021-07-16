class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [
                { id: 1, name: '', age: 21, email: '' },
                { id: 1, name: '', age: 21, email: '' },
                { id: 3, name: '', age: 16, email: '' },
                { id: 4, name: '', age: 25, email: '' }
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys({ Jan: "", Feb: "", Mar: "", Apr: "", May: "", June: "", July: "", Aug: "", Sep: "", Oct: "", Nov: "", Dec: "", })
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
            const { id, name, age, email } = student //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>React Dynamic Table</h1>
                <table id='students'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;