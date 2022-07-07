package com.example.profile.controller;

import com.amazonaws.services.dynamodbv2.datamodeling.PaginatedScanList;
import com.example.profile.entity.Profile;
import com.example.profile.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("profiles")
@CrossOrigin("*")
public class ProfileController {

    @Autowired
    private ProfileRepository Repository;

    @GetMapping
    public List<Profile> findAll(){
        return Repository.findAll();
    }

    @GetMapping(value = "/home")
    public List<Profile> findAttribute(@RequestParam(value = "attribute") String attr, @RequestParam(value = "value") String val ) {
        return Repository.findHome(attr, val);
    }

    @GetMapping(value = "/ApplianceExistence")
    public List<Profile> findAppExist(@RequestParam(value = "appliance") String app, @RequestParam(value = "exist") Boolean exist, @RequestParam(name = "app2", required = false, defaultValue = "") String app2, @RequestParam(name = "exist2", required = false, defaultValue = "") Boolean exist2) {
        return Repository.findAppExist(app, exist,app2, exist2);
    }

    @GetMapping(value = "/ApplianceValue")
    public List<Profile> findAppExist(@RequestParam(value = "appliance") String app, @RequestParam(value = "value") String val , @RequestParam(value = "condition") String cond) {

        return Repository.findAppliance(app, val, cond);
    }
    @GetMapping(value = "/Activities")
    public List<Profile> activities(@RequestParam(value = "activity") String act) {

        return Repository.activities(act);
    }

    // ############################### HOME & APPLIANCE #################################################
    @GetMapping(value = "/homeAppliance/exist")
    public PaginatedScanList<Profile> findHomeAppExist(@RequestParam(value = "attribute") String attr, @RequestParam(value = "value") String val , @RequestParam(value = "appliance") String app, @RequestParam(value = "exist") Boolean exist) {

        return Repository.findHomeApp(attr, val, app,exist);
    }
    @GetMapping(value = "/homeAppliance/condition")
    public List<Profile> findHomeAppCond(@RequestParam(value = "attribute") String attr, @RequestParam(value = "value") String val1 , @RequestParam(value = "appliance") String app, @RequestParam(value = "num") String val2, @RequestParam(value = "condition") String cond) {

        return Repository.findHomeAppCond(attr, val1, app, val2, cond);
    }

}
