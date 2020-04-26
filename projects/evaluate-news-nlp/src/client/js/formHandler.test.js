import * as formHandler from './formHandler.js';

// jest.mock('./formHandler');

describe('analyzeSentiment function', () => {
    it('displays analysis result', () => {
        document.body.innerHTML = '<div id="spinner"></div>'
            + '<div id="polarity"></div>'
            + '<div id="subjectivity"></div>'
            + '<div id="text"></div>'
            + '<div id="polarity_confidence"></div>'
            + '<div id="subjectivity_confidence"></div>';

        formHandler.displayAnalyzeResults({
            polarity: 'positive',
            subjectivity: 'subjective',
            text: 'test text',
            polarity_confidence: 0.5,
            subjectivity_confidence: 1
        });
        expect(document.getElementById('polarity').textContent).toEqual('Polarity: positive');
        expect(document.getElementById('subjectivity').textContent).toEqual('Subjectivity: subjective');
        expect(document.getElementById('text').textContent).toEqual('Text: test text');
        expect(document.getElementById('polarity_confidence').textContent).toEqual('Polarity Confidence: 0.5');
        expect(document.getElementById('subjectivity_confidence').textContent).toEqual('Subjectivity Confidence: 1');
    });
    /*
    // 'async' keyword broken with:
    //       encountered a declaration exception
    //       ReferenceError: regeneratorRuntime is not defined
    it('analyzes text', async () => {
        spyOn(formHandler, 'fetchAnalyzeText').mockImplementationOnce(() => {
            return Promise.resolve({
                polarity: 'positive',
                subjectivity: 'subjective',
                text: 'test text',
                polarity_confidence: 0.5,
                subjectivity_confidence: 1
            });
        });
        document.body.innerHTML = '<div id="spinner"></div>'
            + '<div id="polarity"></div>'
            + '<div id="subjectivity"></div>'
            + '<div id="text"></div>'
            + '<div id="polarity_confidence"></div>'
            + '<div id="subjectivity_confidence"></div>';

        formHandler.analyzeSentiment('test text');
        //setImmediate(() => {
        //    expect(document.getElementById('polarity').textContent).toEqual('Polarity: positive');
        //});
        
        // document.getElementById('polarity').innerHTML = `<span class='format-results'>Polarity: </span>positive`;
        let simpleFlush = new Promise((resolve, reject) => {
            setImmediate(() => {
                resolve('complete');
            });
        });
        await simpleFlush;
        expect(document.getElementById('polarity').textContent).toEqual('Polarity: positive');
    });
    */
});

