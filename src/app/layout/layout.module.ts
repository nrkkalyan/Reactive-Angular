import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AsidebarComponent } from "./asidebar/asidebar.component";
import {
  AsideToggleDirective,
  SidebarToggleDirective,
  SidebarMinimizeDirective,
  BrandMinimizeDirective,
  MobileSidebarToggleDirective,
  SidebarOffCanvasCloseDirective,
  NavDropdownDirective,
  NavDropdownToggleDirective,
  ReplaceDirective
} from "./layout.directive";
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AsidebarComponent,
    AsideToggleDirective,
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    BrandMinimizeDirective,
    MobileSidebarToggleDirective,
    SidebarOffCanvasCloseDirective,
    NavDropdownDirective,
    NavDropdownToggleDirective,
    ReplaceDirective
  ],
  exports: [CommonModule, LayoutComponent]
})
export class LayoutModule {}
