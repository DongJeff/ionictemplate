import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      // /app/ redirect
      {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
          },
          {
            path: 'fashion',
            loadChildren: () => import('../fashion/listing/fashion-listing.module').then(m => m.FashionListingPageModule)
          },
          {
            path: 'fashion/:productId',
            loadChildren: () => import('../fashion/details/fashion-details.module').then(m => m.FashionDetailsPageModule)
          },
          {
            path: 'food',
            loadChildren: () => import('../food/listing/food-listing.module').then(m => m.FoodListingPageModule)
          },
          {
            path: 'food/:productId',
            loadChildren: () => import('../food/details/food-details.module').then(m => m.FoodDetailsPageModule)
          },
          {
            path: 'deals',
            loadChildren: () => import('../deals/listing/deals-listing.module').then(m => m.DealsListingPageModule)
          },
          {
            path: 'deals/:productId',
            loadChildren: () => import('../deals/details/deals-details.module').then(m => m.DealsDetailsPageModule)
          },
          {
            path: 'real-estate',
            loadChildren: () => import('../real-estate/listing/real-estate-listing.module').then(m => m.RealEstateListingPageModule)
          },
          {
            path: 'real-estate/:productId',
            loadChildren: () => import('../real-estate/details/real-estate-details.module').then(m => m.RealEstateDetailsPageModule)
          },
          {
            path: 'coop',
            loadChildren: () => import('../coop/listing/coop-listing.module').then(m => m.CoopListingPageModule)
          },
          {
            path: 'polytech',
            loadChildren: () => import('../polytech/listing/polytech-listing.module').then(m => m.PolytechListingPageModule)
          },
          {
            path: 'polytech/:productId',
            loadChildren: () => import('../polytech/details/polytech-details.module').then(m => m.PolytechDetailsPageModule)
          },
          {
            path: 'college',
            loadChildren: () => import('../college/listing/college-listing.module').then(m => m.CollegeListingPageModule)
          },
          {
            path: 'collegemenu',
            loadChildren: () => import('../college/menu/collegemenu.module').then(m => m.CollegemenuPageModule)
          },
          {
            path: 'college/:productId',
            loadChildren: () => import('../college/details/college-details.module').then(m => m.CollegeDetailsPageModule)
          },
          {
            path: 'upgrade',
            loadChildren: () => import('../upgrade/listing/upgrade-listing.module').then(m => m.UpgradeListingPageModule)
          },
          {
            path: 'upgrade/:productId',
            loadChildren: () => import('../upgrade/details/upgrade-details.module').then(m => m.UpgradeDetailsPageModule)
          },
          {
            path: 'coopmenu',
            loadChildren: () => import('../coopmenu/coopmenu.module').then(m => m.CoopmenuPageModule)
          },
          {
            path: 'tertiarymenu',
            loadChildren: () => import('../tertiary/tertiary.module').then(m => m.TertiaryPageModule)
          },
          {
            path: 'studlife',
            loadChildren: () => import('../studlife/studlife.module').then(m => m.StudlifePageModule)
          },
          {
            path: 'ranking',
            loadChildren: () => import('../ranking/ranking.module').then(m => m.RankingPageModule)
          },
          {
            path: 'qsranking',
            loadChildren: () => import('../qsranking/qsranking.module').then(m => m.QsListingPageModule)
          },
          {
            path: 'theranking',
            loadChildren: () => import('../theranking/theranking.module').then(m => m.QsListingPageModule)
          },
          {
            path: 'arwuranking',
            loadChildren: () => import('../arwuranking/arwuranking.module').then(m => m.QsListingPageModule)
          },
          {
            path: 'edusystem',
            loadChildren: () => import('../edusystem/edusystem.module').then(m => m.EdusystemPageModule)
          },      
          {
            path: 'university',
            loadChildren: () => import('../university/listing/university-listing.module').then(m => m.UpgradeListingPageModule)
          },
          {
            path: 'university/:productId',
            loadChildren: () => import('../university/details/university-details.module').then(m => m.UpgradeDetailsPageModule)
          },
          {
            path: 'coopprogram',
            loadChildren: () => import('../coop/coopprogramlisting/coopprogram-listing.module').then(m => m.CoopListingPageModule)
          },
          {
            path: 'coopprogram/:productId',
            loadChildren: () => import('../coop/coopprogramdetails/coopprogram-details.module').then(m => m.CoopDetailsPageModule)
          },     
          {
            path: 'pathway',
            loadChildren: () => import('../coop/pathwaylisting/pathway-listing.module').then(m => m.CoopListingPageModule)
          },
          {
            path: 'pathway/:productId',
            loadChildren: () => import('../coop/pathwaydetails/pathway-details.module').then(m => m.CoopDetailsPageModule)
          },  
          {
            path: 'transfer',
            loadChildren: () => import('../coop/transferlisting/transfer-listing.module').then(m => m.CoopListingPageModule)
          },
          {
            path: 'transfer/:productId',
            loadChildren: () => import('../coop/transferdetails/transfer-details.module').then(m => m.CoopDetailsPageModule)
          },  
          {
            path: 'tertiarysystem',
            loadChildren: () => import('../edusystem/details/tertiarysystem.module').then(m => m.TertiarysystemPageModule)
          },
          {
            path: 'secondarysystem',
            loadChildren: () => import('../edusystem/details/secondarysystem.module').then(m => m.SecondarysystemPageModule)
          },
          {
            path: 'nzqasystem',
            loadChildren: () => import('../edusystem/details/nzqasystem.module').then(m => m.NzqasystemPageModule)
          },
          {
            path: 'country',
            loadChildren: () => import('../country/country.module').then(m => m.CountryPageModule)
          },
          {
            path: 'gap',
            loadChildren: () => import('../college/application/gap.module').then(m => m.GapPageModule)
          },
          {
            path: 'gapdocs',
            loadChildren: () => import('../college/documents/gapdocs.module').then(m => m.GapdocsPageModule)
          },
          {
            path: 'accomodation',
            loadChildren: () => import('../studlife/studlifedetails/accomodation/accomodation.module').then(m => m.AccomodationPageModule)
          },
          {
            path: 'bankaccount',
            loadChildren: () => import('../studlife/studlifedetails/bankaccount/bankaccount.module').then(m => m.BankaccountPageModule)
          },
          {
            path: 'irdnumber',
            loadChildren: () => import('../studlife/studlifedetails/irdnumber/irdnumber.module').then(m => m.IrdnumberPageModule)
          },
          {
            path: 'livingcost',
            loadChildren: () => import('../studlife/studlifedetails/livingcost/livingcost.module').then(m => m.LivingcostPageModule)
          },
          {
            path: 'lostpassport',
            loadChildren: () => import('../studlife/studlifedetails/lostpassport/lostpassport.module').then(m => m.LostpassportPageModule)
          },
          {
            path: 'parttimework',
            loadChildren: () => import('../studlife/studlifedetails/parttimework/parttimework.module').then(m => m.ParttimeworkPageModule)
          },
          {
            path: 'universityclubs',
            loadChildren: () => import('../studlife/studlifedetails/universityclubs/universityclubs.module').then(m => m.ClubsPageModule)
          },
          {
            path: 'workvisa',
            loadChildren: () => import('../studlife/studlifedetails/workvisa/workvisa.module').then(m => m.WorkvisaPageModule)
          },
          {
            path: 'tertiaryalt',
            loadChildren: () => import('../tertiaryalt/tertiaryalt.module').then(m => m.TertiaryaltPageModule)
          },
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/profile/user-profile.module').then(m => m.UserProfilePageModule)
          },
          {
            path: 'friends',
            loadChildren: () => import('../user/friends/user-friends.module').then(m => m.UserFriendsPageModule)
          }
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [ ]
})
export class TabsPageRoutingModule {}
