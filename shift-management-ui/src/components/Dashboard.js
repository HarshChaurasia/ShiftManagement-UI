import { UserList } from "./UserList";

export const Dashboard = () => {
    return (
        <div>
            <div class="container-fluid bg-primary text-white text-center">
                <h1>Shift Planning</h1>
                <p>"UserName" ("UserId"), "EmailId", "Department", "DepartmentId", <a href='#'>Switch User</a></p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-2">
                        <h3>User List section</h3>
                        <UserList></UserList>
                    </div>
                    <div class="col-sm-8">
                        <h3>Calendar Section</h3>
                    </div>
                    <div class="col-sm-2">
                        <h3>Shift controls</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}