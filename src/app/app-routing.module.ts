import { AlliedEquipmentComponent } from "./allied-equipment/allied-equipment.component";
import { CatEquipmentComponent } from "./cat-equipment/cat-equipment.component";
import { TrailersComponent } from "./trailers/trailers.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path: "allied-equipment", component: AlliedEquipmentComponent},
  {path: "cat-equipment", component: CatEquipmentComponent},
  {path: "trailer", component:TrailersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
