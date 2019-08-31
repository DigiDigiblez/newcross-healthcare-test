import React from 'react';
import './App.css';
import GeneralInfoForm from './components/GeneralInfoForm';
import GeneralInfoHeader from './components/GeneralInfoHeader';

const App: React.FC = () => {
    return (
        <body className="App">
        <header className="App-header">
            <GeneralInfoHeader />
        </header>
        <main className='App-main'>
            <GeneralInfoForm />
        </main>
        </body>
    );
};

export default App;
