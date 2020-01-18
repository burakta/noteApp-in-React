import React, {Component} from 'react';

class NoteTakingApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    this.addNote = this.addNote.bind(this);
    }
    addNote(e) {
        if(this.theTitle.value !== ""){
            var newItem = {
                title:this.theTitle.value,
                note: this.theNote.value
            };
        }
        this.setState((prevState) => {
            return {
                items:prevState.items.concat(newItem)
            }
        });
        this.theTitle.value="";
        this.theNote.value= "";
        e.preventDefault();
    }
    render(){
        return (
            <div>
                <header>
                    <h1>Not Alma Uygulaması</h1>
                </header>
                <div className='main-content'>
                    <ul>
        {this.state.items.map((i) => <li>{i.title}-{i.note}</li>)}
                    </ul>
                </div>
                <footer>
                    <form onSubmit={this.addNote}>
                        <input 
                            type ='text'
                            placeholder ='Not Başlığı'
                            ref={(title)=>this.theTitle = title }/>
                            <textarea 
                                placeholder= 'Notlarınız buraya'
                                ref={(note) =>this.theNote = note}/>
                            <button type='submit'>Not Ekle</button>
                    </form>
                </footer>

            </div>
        )

    }

} 

export default NoteTakingApp;
