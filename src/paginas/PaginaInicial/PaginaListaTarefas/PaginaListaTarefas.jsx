import { useState } from "react";
import Principal from "../../../comum/componentes/Principal/Principal";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoAddSharp } from "react-icons/io5";
import "./PaginaListaTarefas.css";

const PaginaListaTarefas = () => {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarNaLista = () => {
    if (descricao.trim() && descricao) {
      tarefas.push({ descricao, feita: false });
      setTarefas([...tarefas]);
    } else {
      alert("Digite uma descrição!");
      setDescricao("");
    }
  };

  const marcarComoFeita = (index) => {
    const tarefaEdicao = tarefas[index];
    tarefas[index] = {
      ...tarefaEdicao,
      feita: !tarefaEdicao.feita,
    };

    setTarefas([...tarefas]);
  };

  const removerDaLista = (index) => {
    if (
      confirm(
        `Tem certeza que deseja excluir: ${tarefas[index].descricao}`
      )
    ) {
      if (tarefas[index].feita) {
        tarefas.splice(index, 1);
        setTarefas([...tarefas]);
      } else {
        alert(
          'A tarefa precisa estar concluída para ser excluida'
        );
      }
    }
  };

  return (
    <Principal titulo={`Lista de Tarefas (${tarefas.length})`} voltarPara={"/"}>
      <div className="icon">
        <input
          type="text"
          placeholder="Adicionar item..."
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              // colocando o dicionar ao clicar no Enter
              adicionarNaLista();
              setDescricao("");
            }
          }}
        />{" "}
        <IoAddSharp onClick={adicionarNaLista} size={30} color="red" />
      </div>

      {tarefas.map((item, index) => {
        return (
          <div key={index} className="pagina-lista-tarefas_item">
            <input
              type="checkbox"
              checked={item.feita}
              onChange={() => marcarComoFeita(index)}
            />

            <span
              style={{
                textDecoration: item.feita ? "line-through" : "none",
              }}
            >
              {item.descricao}
            </span>
            {item.descricao}
            <FaRegTrashCan
              className="remover-item_lista"
              size={14}
              color="red"
              onClick={() => removerDaLista(index)}
            />
          </div>
        );
      })}

      {/* retorno de mensagem usando condição! */}
      {tarefas.length === 0 && (
        <span className="pagina-lista-tarefas-mensagem-vazia">
          Não tem tarefas cadastradas.
        </span>
      )}
    </Principal>
  );
};

export default PaginaListaTarefas;
