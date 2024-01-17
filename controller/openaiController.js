const openai = require("../config/config");

const generateMeta = async (url) => {
    const response = await openai.chat.completions.create({
      messages: [
        { 
            role: 'user', 
            content: 
            `Take a look at this URL: ${url}. As a senior security consultant, consider
            various factors in the given url. Reply in the following format.
            [part-a, part-b]. Where part-a can only be GOOD or BAD only, do not give any other explanation
            for this part. GOOD if the url does not seems to
            be a phishing URL, BAD if other wise. part-b is the reason for explation in part-a.
            `
        },
      ],
      model: 'gpt-3.5-turbo',
    })
  
    console.log(response.choices[0].message.content);
}

module.exports = { generateMeta };