import './styled.css';

import Editor from 'react-simple-code-editor';

import {highlight, languages} from 'prismjs';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-sql';

export const SqlCodeBlock = ({inputValue, setInputValue}: any) => {
    
    return (
        <div className="window">
            <div className="editor_wrap">
                <Editor
                    value={inputValue}
                    placeholder='Enter a query here'
                    onValueChange={code => setInputValue(code)}
                    highlight={code => highlight(code, languages.sql, 'sql')}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 16,
                    }}
                />
            </div>
        </div>
    );
};