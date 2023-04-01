import React, { useState } from 'react';
import styles from './commentsstyles.module.css';
import Comments from '../../components/comment/comments';

function Comentarios() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      firstName: 'John',
      lastName: 'Doe',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium lorem quam. Curabitur non gravida dui. Aenean ligula dui, commodo sed lacinia sed, convallis non justo. Etiam sed velit consectetur. ',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id feugiat lacus. Aliquam at est eu odio rutrum euismod eget eget neque. Mauris vestibulum metus purus, non tristique turpis hendrerit et. Duis tincidunt nunc urna, non condimentum velit aliquam a. Nunc a bibendum turpis. In hac habitasse platea dictumst. Cras.',
    },
    {
      firstName: 'Joe',
      lastName: 'Schmoe',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et felis felis. Nulla tempus felis a pharetra lacinia. Aliquam rutrum justo at elit imperdiet commodo. Maecenas tristique sem sit amet eros mattis, vitae porttitor sem dignissim. Aenean eu semper ipsum. Donec facilisis tempor hendrerit. Nam ante lacus, tristique eget accumsan consectetur, pellentesque in leo. Maecenas ut blandit velit. Curabitur vulputate iaculis arcu at iaculis. Pellentesque tempus metus tortor. Donec ut dui et lacus tincidunt eleifend. Praesent vitae aliquet dui. Quisque. ',
    },
  ]);

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.commentsSection}>
          <div>
            <header>
              <span className={styles.title}>
                Comentarios({comments.length})
              </span>
            </header>
            {comments.map(item => (
              <Comments
                firstName={item.firstName}
                lastName={item.lastName}
                comment={item.comment}
              />
            ))}
          </div>
          <div className={styles.formContainer}>
            <form
              onSubmit={e => {
                e.preventDefault();
                setComments(prev => [
                  ...prev,
                  {
                    firstName: firstName,
                    lastName: lastName,
                    comment: comment,
                  },
                ]);
                setFirstName('');
                setLastName('');
                setComment('');
              }}
            >
              <div className={styles.nameInputs}>
                <input
                  type="text"
                  name="First Name"
                  placeholder="Nome"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  name="Last Name"
                  placeholder="Sobrenome"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
              <textarea
                value={comment}
                className={styles.commentTextArea}
                placeholder="Deixe seu comentario"
                rows={5}
                onChange={e => setComment(e.target.value)}
              ></textarea>
              <div className={styles.buttonContainer}>
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comentarios;
