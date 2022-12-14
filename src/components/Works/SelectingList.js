// Componenti
import { Section } from './../UI/Section';
import { Title } from './../UI/Title';
//Style 
import classes from './scss/SelectingList.module.scss'

const techs = [
    {id: 0, nome: 'Tutti'},
    {id: 1, nome: 'CSS'},
    {id: 2, nome: 'Bootstrap'},
    {id: 3, nome: 'JavaScript'},
    {id: 4, nome: 'Vue'},
    {id: 5, nome: 'Laravel'},
    {id: 6, nome: 'React'},
]

const SelectingList = ({ selectedTech }) => {
    const select = (e) => {
        selectedTech(+e.target.value)
    }

    return (
        <Section className={classes.sel_section}>
            <Title 
                className={classes.sel_title} 
                text='Filtra per tecnologia:'
            />
                
            <div >
                <select
                    className={classes.sel_select}
                    onChange={select}
                >
                    {
                        techs.map( item => {
                            return (
                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.nome}
                            </option>
                            )
                        })
                    }
                </select>
            </div>
        </Section>
    )
}

export default SelectingList