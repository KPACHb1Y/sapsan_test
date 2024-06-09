import { useState } from "react";
import { Search } from "./components/Search/Search";
import { PictureLists } from "./components/PictureLists/PictureLists";

import { url } from "./utils/api/url";
import './App.css';

function App() {

    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [error, setError] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleClickPictures = () => {
        if (!value) {
            return;
        }

        if (value === 'Error') {
            setError(true);
        } else {
            setError(false);
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results);

            })
            .catch((err) => {
                console.error(err);
            })

        setTitle('К сожалению, поиск не дал результатов');
        setVisible(true);
    }

    return (
        <div className="App">
            <div className={!visible ? 'wrapper' : 'wrapper-pictures'}>
                <Search
                    value={value}
                    visible={visible}
                    setValue={setValue}
                    onClickCallback={handleClickPictures}
                />
                <PictureLists
                    data={data}
                    error={error}
                    value={value}
                    title={title}
                    visible={visible}
                />
            </div>
        </div>
    );
}

export default App;
