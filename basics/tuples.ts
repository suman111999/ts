//tuple ->it is a fixed length array

function useState(initialValue: string): [() => string, (v: string) => void] {
    let value: string = initialValue;
    return [
        () => value,
        (v: string) => {
            value = v;
        }
    ]
}

//name1 should be function
const [name1, setName1] = useState('jhon')

console.log(name1())
setName1('ram')
console.log(name1())
