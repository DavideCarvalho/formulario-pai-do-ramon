import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [quantity, setQuantity] = useState<number>(0);
  const [email, setEmail] = useState<string>('meu@email.com');
  const [whatsapp, setWhatsapp] = useState<string>('(13)981234567');
  const [notes, setNotes] = useState<string>('');

  function formHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = {
      quantity,
      email,
      whatsapp,
      notes,
    };

    console.log('requisição', body);

    axios.post('http://localhost:8080/api/v1/form', body).then(({ data }) => {
      console.log(data);
    });
  }

  return (
    <>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          formHandler(event)
        }
      >
        <label>Produto pra orçamento</label>
        <br />
        <select name="select">
          <option value="CANECA">Caneca</option>
          <option value="CHINELO">Chinelo</option>
        </select>
        <br />
        <label>Quantidade</label>
        <br />
        <input
          type="number"
          value={quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuantity(Number(e.target.value))
          }
        />
        <br />
        <label>E-mail pra contato</label>
        <br />
        <input
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          value={email}
          autoComplete={'off'}
        />
        <br />
        <label>Whatsapp</label>
        <br />
        <input
          value={whatsapp}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWhatsapp(e.target.value)
          }
          type="text"
          autoComplete={'off'}
          maxLength={9}
        />
        <br />
        <label>Observações</label>
        <br />
        <textarea
          value={notes}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNotes(e.target.value)
          }
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
