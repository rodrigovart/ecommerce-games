function userRow(user) {
    return `<tr>
                <td>${user._id}</td>
                <td>${user.nome}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td><b class="text-${user.administrador == 'false' ? 'danger' : 'success'}">${user.administrador == 'false' ? 'NÃO' : 'SIM'}</b></td>
                <td><span class="bi-pen-fill action" onClick="javascript:editUser('${user._id}')"></span></td>
                <td><span class="bi-trash-fill text-success action" onClick="javascript:deleteUser('${user.nome}', '${user._id}')"></span></td>
            </tr>`
}