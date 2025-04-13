import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "../containers/Home/Home";
import { MedicoCadastro } from "../containers/MedicoCadastro/MedicoCadastro";
import { ConsultasAgendadas } from "../containers/MedicoConsultas/MedicoConsultas";
import { FormularioPaciente } from "../containers/Paciente/FormularioPaciente";
import { ErrorPage } from "../containers/Error/ErrorPage";

function RoutesComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<MedicoCadastro />} />
                <Route path="/consultas" element={<ConsultasAgendadas />} />
                <Route path="/pacientecadastro" element={<FormularioPaciente />} />
                <Route path="*" element={
                    <ErrorPage
                        status="404"
                        error="Página não encontrada"
                        message="A URL que você tentou acessar não existe."
                    />
                } />

            </Routes>
        </Router>
    );
}

export default RoutesComponent;
